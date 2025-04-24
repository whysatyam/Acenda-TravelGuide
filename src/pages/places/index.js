import PlacesDirectory from "@/components/PlacesDirectory";

export async function getStaticProps() {
  const res = await fetch("/api/places");
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