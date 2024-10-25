import { Skeleton } from "@/components/shadcn/skeleton";

export default function LoadingCard(props: { index?: number }) {
  const { index } = props;
  return (
    <section className="rounded-lg bg-neutral-100/25 dark:bg-neutral-900/25 w-full border-[1px] border-zinc-300 dark:border-zinc-800 flex justify-between items-center p-2">
      <div className="flex justify-start items-center gap-2">
        {index && (
          <div className="text-center w-5 text-sm text-neutral-600 dark:text-neutral-400">
            {index}
          </div>
        )}
        <Skeleton className="rounded-sm w-12 h-12 flex-none bg-neutral-300/75 dark:bg-neutral-800/75" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="rounded-sm h-4 w-36 bg-neutral-300/75 dark:bg-neutral-800/75" />
          <Skeleton className="rounded-sm h-3 w-28 bg-neutral-300/75 dark:bg-neutral-800/75" />
        </div>
      </div>
      <Skeleton className="rounded-full h-10 w-10 bg-neutral-300/75 dark:bg-neutral-800/75" />
    </section>
  );
}
