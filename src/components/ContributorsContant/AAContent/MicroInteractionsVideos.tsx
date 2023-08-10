import React from "react";
import SectionContainer from "./SectionContainer";
import { FlatListWithCircularIndicator } from "react-native-flatlist-withindicator";

const MicroInteractionsVideos = () => {
  const Content = () => {
    return (
      <FlatListWithCircularIndicator
        data={[]}
        cardWidthPlusMarginValue={0}
        renderItem={undefined}
      />
    );
  };
  return <SectionContainer title="Micro Interactions" content={<Content />} />;
};

export default MicroInteractionsVideos;
