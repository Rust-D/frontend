import { Condition } from "../../data/Conditions";
import { useLocation } from "react-router-dom";
import { GiftRepository } from "../../data/GiftRepository";

export const location = useLocation<{condition: Condition}>();
export const condition = new Condition( 
  location.state.condition.maxPrice,
  location.state.condition.minPrice,
  location.state.condition.profile,
  location.state.condition.season,
  location.state.condition.giftCategory
);

export const GiftRepo = new GiftRepository;

