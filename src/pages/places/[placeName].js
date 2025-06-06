import PlaceInfo from "@/components/PlaceInfo";
import { data } from "@/pages/api/places";

const toKebabCase = (str) => str.toLowerCase().replace(/\s+/g, "-");

export async function getStaticPaths() {
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