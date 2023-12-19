import { useParams } from "react-router-dom";
export function User() {
  const { userId } = useParams();
  return (
    <>
      <div className="text-2xl bg-gray-700 text-yellow-600 p-4 text-center">
        {" "}
        User:{userId}{" "}
      </div>
    </>
  );
}
