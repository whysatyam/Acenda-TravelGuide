import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../redux/likedSlice";
import toast from "react-hot-toast";

function HeartLike({ place }) {
  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.liked.likedItems);

  const isLiked = likedItems.some((item) => item.name === place.name);

  const handleToggle = (e) => {
    e.stopPropagation();
    dispatch(toggleLike(place));
    if (!isLiked) {
      toast.success("Added to your Favourites");
    } else {
      toast("Removed from your Favourites", {
        icon: "🗑️",
      });
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="absolute top-4.5 right-4.5 text-xl z-10"
    >
      {isLiked ? (
        <FaHeart className="text-red-500 transition duration-300" />
      ) : (
        <FaRegHeart className="text-white transition duration-300" />
      )}
    </button>
  );
}


export default HeartLike;