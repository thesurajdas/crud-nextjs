import TopicsList from "@/components/TopicsList";

const getTopics = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch topics: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching topics:", error.message);
    return { topics: [] }; // Fallback to an empty array
  }
};

export default async function Home() {
  const data = await getTopics();

  // Handle case where no topics are available
  if (!data?.topics || data.topics.length === 0) {
    return <p>No topics available.</p>;
  }

  return <TopicsList topics={data.topics} />;
}
