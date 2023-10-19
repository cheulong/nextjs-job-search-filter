interface DetailTagProps {
  detail: string;
}

export default function DetailTag({ detail }: DetailTagProps) {
  return (
    <div
      data-testid="tag"
      className=" bg-transparent text-cyan-darkGray p-0 sm:p-0 md:p-0 lg:p-1"
    >
      <p>{detail}</p>
    </div>
  );
}
