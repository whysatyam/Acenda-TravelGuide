import PlacesDirectory from "@/components/PlacesDirectory";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export async function getStaticProps() {
  const res = await fetch(`${baseURL}/api/places`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Places({ data }) {
  return <PlacesDirectory data={data} />;
}