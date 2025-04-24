import PlaceInfo from "@/components/PlaceInfo";

const toKebabCase = (str) => str.toLowerCase().replace(/\s+/g, "-");
const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export async function getStaticPaths() {
  const res = await fetch(`${baseURL}/api/places`);
  const data = await res.json();

  const paths = [];

  data.states.forEach((state) => {
    state.places.forEach((place) => {
      paths.push({
        params: { placeName: toKebabCase(place.name) },
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${baseURL}/api/places`);
  const data = await res.json();

  let foundPlace = null;
  let stateData = null;

  data.states.forEach((state) => {
    state.places.forEach((place) => {
      if (toKebabCase(place.name) === params.placeName) {
        foundPlace = place;
        stateData = state;
      }
    });
  });

  if (!foundPlace || !stateData) {
    return { notFound: true };
  }

  return {
    props: {
      place: foundPlace,
      state: stateData,
    },
  };
}

export default function PlaceDetailsPage({ place, state }) {
  return <PlaceInfo place={place} state={state} />;
}