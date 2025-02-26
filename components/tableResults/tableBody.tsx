// "use client";

// import { prisma } from "@/lib/db";
// import TableBodyEmpty from "./tableBodyEmpty";
// import { useVotes } from "./VotesProvider";

// const TableBody = async () => {
//   const { votes } = useVotes();

//   console.log("", votes);

//   // const votes = await prisma.vote.findMany();
//   const candidatesBilans =  votes?.reduce<Record<string, number>>(
//     (acc, post) => {
//       acc[post.candidateName] = (acc[post.candidateName] || 0) + 1;
//       return acc;
//     },
//     {}
//   );

//   const totalVotes = Object.values(candidatesBilans).reduce(
//     (sum, count) => sum + count,
//     0
//   );

//   if (!votes || votes.length === 0) {
//     return <TableBodyEmpty />;
//   }
//   return (
//     <>
//       <tbody>
//         {Object.entries(candidatesBilans).map(
//           (candidate: [string, number], idx) => {
//             return (
//               <tr key={candidate[0]}>
//                 <td className="border border-accent px-2">{idx + 1}</td>
//                 <td className="border border-accent px-2">{candidate[0]}</td>
//                 <td className="border border-accent px-2">{candidate[1]}</td>
//               </tr>
//             );
//           }
//         )}
//       </tbody>

//       <tfoot>
//         <tr>
//           <td className="px-2"></td>
//           <td className="text-end px-2">Suma: </td>
//           <td className="px-2">{totalVotes}</td>
//         </tr>
//       </tfoot>
//     </>
//   );
// };

// export default TableBody;

// components/TableBody.tsx (Client Component)
"use client";

import TableBodyEmpty from "./tableBodyEmpty";

interface Vote {
  candidateName: string;
}

interface TableBodyProps {
  votes: Vote[];
}

const TableBody = ({ votes }: any) => {
  if (!votes || votes.length === 0) return <TableBodyEmpty />;

  return (
    <>
      <tbody>
        {Object?.entries(votes?.candidatesBilans).map(
          ([candidateName, voteCount]: [any, any], idx) => (
            <tr key={candidateName}>
              <td className="border border-accent px-2">{idx + 1}</td>
              <td className="border border-accent px-2">{candidateName}</td>
              <td className="border border-accent px-2">{voteCount}</td>
            </tr>
          )
        )}
      </tbody>

      <tfoot>
        <tr>
          <td className="px-2"></td>
          <td className="text-end px-2">Suma: </td>
          <td className="px-2">{votes.totalVotes}</td>
        </tr>
      </tfoot>
    </>
  );
};

export default TableBody;
