import PlacesDirectory from "@/components/PlacesDirectory";
import { data } from "@/pages/api/places";

export default function Places() {
  return <PlacesDirectory data={data} />;
}