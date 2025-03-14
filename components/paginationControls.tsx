"use client";

import IconLeft from "@/icons/iconLeft/iconLeft";
import IconRight from "@/icons/iconRight/iconRight";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalVotes: number;
};

const PaginationControls = (props: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const perPage = searchParams.get("perPage") ?? "5";

  const handlePageChange = (newPage: number) => {
    router.push(`/login/admin/?page=${newPage}&perPage=${perPage}`);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => handlePageChange(Number(page) - 1)}
        disabled={!props.hasPrevPage}
      >
        <IconLeft />
      </button>
      <div className="mx-3 my-2">
        {page}/{Math.ceil(props.totalVotes / Number(perPage))}
      </div>

      <button
        onClick={() => handlePageChange(Number(page) + 1)}
        disabled={!props.hasNextPage}
      >
        <IconRight />
      </button>
    </div>
  );
};

export default PaginationControls;
