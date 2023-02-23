//Components: Any component name we should write with capital Letter
//Component is a function which returns JSX code.
//Functional Component : It is a normal Function and it is just returning piece of JSX code. and it can return react element also.
//when we use a component inside a component it is called component composition.
//Any peice of jsx component should have only one parent

//Virtual DOM: It is a copy of the real DOM. It is a javascript object.

import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className=" bg-slate-100 flex justify-around items-center font-bold">
      <h1>Bhojan.com</h1>
      <ul className="flex">
        <li className="p-5">Offers</li>
        <li className="p-5">Help</li>
        <li className="p-5">SignIn</li>
        <li className="p-5">Cart</li>
      </ul>
    </div>
  );
};

const RestaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "85860",
      name: "Sargam Food",
      uuid: "e357c369-dac0-4a38-ba19-bf3a5495dfe7",
      city: "60",
      area: "Junction Plot",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "bqgtntm79sjwhd5kdajl",
      cuisines: [
        "Chinese",
        "North Indian",
        "South Indian",
        "Burgers",
        "Pizzas",
        "Biryani",
      ],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 12,
      minDeliveryTime: 12,
      maxDeliveryTime: 12,
      slaString: "12 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "sargam-food-junction-plot-race-course-road",
        city: "rajkot",
      },
      cityState: "60",
      address:
        "Ground floor, Bilkha plaza, Kasturba road, opp. mohanbhai hall, Rajkot",
      locality: "Junction Plot",
      parentId: 178390,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "85860",
        deliveryTime: 12,
        minDeliveryTime: 12,
        maxDeliveryTime: 12,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "214923",
      name: "Iqbal Restaurant",
      uuid: "eb2e4785-b779-4ede-93b5-6c94a9cc26fe",
      city: "60",
      area: "Lakhajiraj Road",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "umnt1isog8xq57hijqek",
      cuisines: ["North Indian", "Biryani", "Mughlai", "Pizzas"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 14,
      minDeliveryTime: 14,
      maxDeliveryTime: 14,
      slaString: "14 MINS",
      lastMileTravel: 1.100000023841858,
      slugs: {
        restaurant: "iqbal-food-parcel-race-course-road-race-course-road",
        city: "rajkot",
      },
      cityState: "60",
      address:
        "Iqbal Non Veg Restaurant, Sir Lakhajiraj Road, Bangdi Bazar, Lohana Para, Rajkot, Gujarat, India",
      locality: "Lakhaji Raj Road",
      parentId: 107307,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "10% off",
        shortDescriptionList: [
          {
            meta: "10% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off up to ₹40 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "10% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off up to ₹40 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "214923",
        deliveryTime: 14,
        minDeliveryTime: 14,
        maxDeliveryTime: 14,
        lastMileTravel: 1.100000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "85692",
      name: "The Grand Thakar - TGT",
      uuid: "1570e79f-5ae8-4e8a-bf5d-19d9d7e966fa",
      city: "60",
      area: "Jubeli Chowk",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "aqjtcoxwuvbcnykea5ci",
      cuisines: [
        "Gujarati",
        "Punjabi",
        "North Indian",
        "Chinese",
        "Continental",
        "Pizzas",
        "Biryani",
      ],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: "22 MINS",
      lastMileTravel: 0.30000001192092896,
      slugs: {
        restaurant: "the-grand-thakar-kothi-compound-race-course-road",
        city: "rajkot",
      },
      cityState: "60",
      address: "Near Jubilee Garden, Kothi Compound, Rajkot",
      locality: "Jawahar Road",
      parentId: 257532,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "10% off",
        shortDescriptionList: [
          {
            meta: "10% off | Use PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off | Use code PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "10% OFF",
        shortDescriptionList: [
          {
            meta: "Use PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off | Use code PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "85692",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 0.30000001192092896,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "641515",
      name: "Sunny Paji Da Dhaba",
      uuid: "a0629030-2650-4a02-bafb-3eabf01cc1dc",
      city: "60",
      area: "Sarveshwar Chowk",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "674b9a6c847fc798129db173e60ccd57",
      cuisines: ["Thalis", "Punjabi", "Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 18,
      minDeliveryTime: 18,
      maxDeliveryTime: 18,
      slaString: "18 MINS",
      lastMileTravel: 2.299999952316284,
      slugs: {
        restaurant: "sunny-paji-da-dhaba-race-course-road-race-course-road-2",
        city: "rajkot",
      },
      cityState: "60",
      address: "Krishna Kunj Street no.21, Sardar Nagar, Rajkot  360001",
      locality: "Sardar Nagar",
      parentId: 197217,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "641515",
        deliveryTime: 18,
        minDeliveryTime: 18,
        maxDeliveryTime: 18,
        lastMileTravel: 2.299999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "129509",
      name: "Royal Punjabi & Chinese",
      uuid: "7279b63b-47ac-499a-a29f-5c8c6977458b",
      city: "60",
      area: "Raiya Road",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "blrptn7rvbssnulhu8s4",
      cuisines: ["Chinese", "North Indian", "Burgers", "Pizzas", "Biryani"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: "22 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "royal-punjabi-chinese-raiya-road-race-course-road",
        city: "rajkot",
      },
      cityState: "60",
      address:
        "Royal Punjabi & Chinese, Opposite Sadguru Tirthdham, Near RK Pan, Raiya Road, Rajkot",
      locality: "Rk Pan",
      parentId: 172406,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5802083~p=10~eid=00000186-79eb-efdb-2507-28b700860a0a",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "129509",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.8",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "101840",
      name: "Bharmal Restaurant",
      uuid: "455629fe-6b51-467a-a907-fa40052bf3b4",
      city: "60",
      area: "Nutan Press Road",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "gmyhcgd6fgtvnvhv8jic",
      cuisines: ["North Indian", "Biryani"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 14,
      minDeliveryTime: 14,
      maxDeliveryTime: 14,
      slaString: "14 MINS",
      lastMileTravel: 0.8999999761581421,
      slugs: {
        restaurant: "bharmal-restaurant-race-course-road-race-course-road",
        city: "rajkot",
      },
      cityState: "60",
      address: "Opposite Huseni Tower, Nutan Press Road, Race Course, Rajkot",
      locality: "Race Course Road",
      parentId: 44473,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "101840",
        deliveryTime: 14,
        minDeliveryTime: 14,
        maxDeliveryTime: 14,
        lastMileTravel: 0.8999999761581421,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.6",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "378293",
      name: "Wok On Fire",
      uuid: "418c30a0-136e-4731-a460-4f443a8039b3",
      city: "60",
      area: "Race Course Road",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "qxutdkhdxmkmwpaufwu1",
      cuisines: ["Chinese", "Thai", "Asian"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 2.200000047683716,
      slugs: {
        restaurant: "wok-on-fire-race-course-road-race-course-road",
        city: "rajkot",
      },
      cityState: "60",
      address: "GF 56 PRIDE EMPIRENR UNION BANK RACE COURSERAJKOT GUJARAT",
      locality: "Union Bank",
      parentId: 5825,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5963013~p=13~eid=00000186-79eb-efdb-2507-28b800860d1e",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "378293",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 2.200000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
];

const RestaurantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
}) => {
  return (
    <div className="m-10 p-2 w-80 h-80 border-2 bg-slate-200">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        className="w-80 h-44 hover:scale-105 duration-500 mb-2"
      />
      <h1 className="text-xl font-bold"> {name} </h1>
      <p className="my-2 text-sm">{cuisines.join(",")}</p>
      <p>{lastMileTravelString}</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {RestaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} />;
      })}
    </div>
  );
};

const Footer = () => {
  return(
    <div className=" mx-auto text-center bg-slate-100 font-bold">
   Copyright &copy; Bojan.com Reserved
   </div>
  );
};

const SwiggyPage = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SwiggyPage />);
