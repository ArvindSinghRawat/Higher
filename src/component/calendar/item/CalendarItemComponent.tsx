import React from "react";
import { Card, Typography } from "antd";
const { Text } = Typography;

type CalendarItemComponentProps = {
  label: String;
  is_muted?: boolean;
};

/**
 * Card which can be used as a calendar entry
 * @param label - Label that is actually renedered on the component
 * @param is_muted - If true, mutes the rendered component
 * @returns A single component which has a label and conditionally muted
 */
export default function CalendarItemComponent({
  label,
  is_muted = false,
}: CalendarItemComponentProps) {
  let classes = "block m-2 lg:m-4 2xl:m-5 p-2 lg:p-4 2xl:p-5 p-2 h-full w-full";
  const muted_gradient = {
    background: "rgb(243,244,246)",
    backgroundImage: `repeating-linear-gradient(to left top, #f3f4f6, #ffffff, #f3f4f6 50px)`,
    filter: `progid:DXImageTransform.Microsoft.gradient(startColorstr="#f3f4f6",endColorstr="#f3f4f6",GradientType=1)`,
  };
  if (is_muted) {
    return (
      <Card size="small" hoverable={true} className={classes} style={muted_gradient}>
        <Text>{label}</Text>
      </Card>
    );
  } else {
    return (
      <Card size="small" className={classes} hoverable={true}>
        <Text className="block object-left-top font-medium">{label}</Text>
      </Card>
    );
  }
}
