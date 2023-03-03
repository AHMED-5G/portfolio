import { Bid, Horse, HorseInAuction } from "../../src/types/types";
import {
  getRandomInt,
  getRandomOneItemFromList,
  randomIntNumber,
} from "../../src/utils/helperFunctions";
import { usersWithImages } from "../postsDummy/postsDummy";

export const horses: Horse[] = [
  {
    id: "1",
    name: "Arabian Horse",
    history:
      "The Arabian or Arab horse (Arabic: الحصان العربي ) is a breed of horse that originated on the Arabian Peninsula. With a distinctive head shape and high tail carriage, the Arabian is one of the most easily recognizable horse breeds in the world. It is also one of the oldest breeds, with archaeological evidence of horses in the Middle East that resemble modern Arabians dating back 4,500 years. Throughout history, Arabian horses have spread around the world by both war and trade, used to improve other breeds by adding speed, refinement, endurance, and strong bone. Today, Arabian bloodlines are found in almost every modern breed of riding horse. ",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Halterstandingshotarabianone.jpg/800px-Halterstandingshotarabianone.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Trottingarabiancolttwo.jpg/800px-Trottingarabiancolttwo.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/RabicanoArab.jpg/800px-RabicanoArab.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Arabian_Horse_%28244439631%29.jpeg/800px-Arabian_Horse_%28244439631%29.jpeg?20180805020149",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/WM_Nafis_-_Arabian_horse.jpg/640px-WM_Nafis_-_Arabian_horse.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/NDA_Shariha_Bint_Shanah_12.jpg/640px-NDA_Shariha_Bint_Shanah_12.jpg",
    ],
  },

  {
    id: "2",
    name: "Andalusian Horse",
    history:
      "The Andalusian, also known as the Pure Spanish Horse or PRE , is a horse breed from the Iberian Peninsula, where its ancestors have lived for thousands of years. The Andalusian has been recognized as a distinct breed since the 15th century, and its conformation has changed very little over the centuries.",
    image:
      "https://images.unsplash.com/photo-1606107869722-d5cbadabe2f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

    images: [
      "https://images.unsplash.com/photo-1553284965-e2815db2e5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1613514101068-57e1491adb2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1563787765695-df0b1878d9a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1556962427-03a0ad9342fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGFuZGFsdXNpYW4lMjBob3JzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ],
  },
  {
    id: "3",
    name: "Morgan Horse",
    history:
      "The Morgan horse is one of the earliest horse breeds developed in the United States.[1] Tracing back to the foundation sire Figure, later named Justin Morgan after his best-known owner, Morgans served many roles in 19th-century American history, being used as coach horses and for harness racing, as general riding animals, and as cavalry horses during the American Civil War on both sides of the conflict. Morgans have influenced other major American breeds, including the American Quarter Horse, Tennessee Walking Horse and the Standardbred. ",
    image:
      "https://images.unsplash.com/photo-1666280254670-23d2fbe494ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9yZ2FuJTIwaG9yc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    images: [
      "https://images.unsplash.com/photo-1622900595625-bbe6493a92b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yZ2FuJTIwaG9yc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1666280607956-ccf536344e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9yZ2FuJTIwaG9yc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1641089143270-581d364314d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW9yZ2FuJTIwaG9yc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/uploads/14136148007774dc82563/ce92d553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vcmdhbiUyMGhvcnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/MorganStarSnyp.jpg/640px-MorganStarSnyp.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/MorganHead1.jpg/640px-MorganHead1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Morganhead.jpg/640px-Morganhead.jpg",
    ],
  },
];

const generateObjectOfBid = () => {
  return {
    user: getRandomOneItemFromList(usersWithImages),
    timeStamp: new Date().getTime(),
    amount: getRandomInt(10),
  };
};

const myBids: Bid[] = new Array(getRandomInt(3))
  .fill(getRandomInt(3))
  .map(() => generateObjectOfBid());

const horseInAuction = {
  horse: getRandomOneItemFromList(horses),
  bids: myBids,
  currentBidPrice: function () {
    const maxBid = this.bids.reduce((max, bid) =>
      max.amount > bid.amount ? max : bid
    );
    return maxBid.amount;
  },

  startingPrice: getRandomOneItemFromList([4000, 3000, 8000]),
  timeRemindingInSeconds: randomIntNumber(60 * 5),
};

export const horsesInAuction: HorseInAuction[] = new Array(3)
  .fill(3)
  .map(() => horseInAuction);
