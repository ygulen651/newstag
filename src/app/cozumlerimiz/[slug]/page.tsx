import React from "react";
import { notFound } from "next/navigation";
import { solutions } from "@/lib/solutions-data";
import SolutionDetail from "./SolutionDetail";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);

  if (!solution) {
    notFound();
  }

  return <SolutionDetail slug={slug} />;
}
