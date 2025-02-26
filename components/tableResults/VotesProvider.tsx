// context/VotesContext.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getVotes } from "./getVotes";

interface Vote {
  candidateName: string;
}

interface VotesContextType {
  votes: Vote[];
}

const VotesContext = createContext<VotesContextType | undefined>(undefined);

export const VotesProvider = ({ children }: { children: React.ReactNode }) => {
  const [votes, setVotes] = useState<Vote[]>([]);

  useEffect(() => {
    const fetchVotes = async () => {
      const data = await getVotes();
      // setVotes(data);
    };

    fetchVotes();
  }, []);

  return (
    <VotesContext.Provider value={{ votes }}>{children}</VotesContext.Provider>
  );
};

export const useVotes = () => {
  const context = useContext(VotesContext);
  if (!context) {
    throw new Error("useVotes must be used within a VotesProvider");
  }
  return context;
};
