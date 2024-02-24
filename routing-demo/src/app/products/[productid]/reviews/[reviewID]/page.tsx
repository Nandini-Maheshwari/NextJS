import { notFound } from "next/navigation";

export default function ReviewID({ params }: {
  params: { productid: string, reviewID: string };
}) {
  if(parseInt(params.reviewID) > 1000) notFound();

  return <h1>Review {params.reviewID} for product {params.productid}</h1>;
}