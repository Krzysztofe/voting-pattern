"use client";

import { createContext, useState, useEffect } from "react";
// import { getVotesCash } from "../../actions/getVotes";
import { useContext } from "react";

type VotesData = {
  candidatesBilans: Record<string, number>;
  totalVotes: number;
};

type VotesContextType = {
  votes: VotesData | null;
  setVotes: React.Dispatch<React.SetStateAction<VotesData | null>>;
};

const VotesContext = createContext<VotesContextType | null>(null);

export const useVotes = () => {
  const context = useContext(VotesContext);
  if (!context) {
    throw new Error("useVotes must be used within a VotesProvider");
  }
  return context;
};

export const VotesProvider = ({ children }: { children: React.ReactNode }) => {
  const [votes, setVotes] = useState<VotesData | null>(null);

  useEffect(() => {
    const fetchVotes = async () => {
      const data = await getVotes();
      setVotes(data || null);
    };
    fetchVotes();
  }, []);

  return (
    <VotesContext.Provider value={{ votes, setVotes }}>
      {children}
    </VotesContext.Provider>
  );
};
