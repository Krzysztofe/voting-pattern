"use client";
import IconLeft from "@/icons/iconLeft/iconLeft";
import IconRight from "@/icons/iconRight/iconRight";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

const PaginationControls = (props: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const perPage = searchParams.get("perPage") ?? "5";

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => {
          router.push(
            `/login/admin/?page=${Number(page) - 1}&per_page=${perPage}`
          );
        }}
        disabled={!props.hasPrevPage}
      >
        <IconLeft />
      </button>
      <div>
        {page}/{Math.ceil(10 / Number(perPage))}
      </div>

      <button
        onClick={() => {
          router.push(
            `/login/admin/?page=${Number(page) + 1}&perPage=${perPage}`
          );
        }}
        disabled={!props.hasNextPage}
      >
        <IconRight />
      </button>
    </div>
  );
};

export default PaginationControls;
