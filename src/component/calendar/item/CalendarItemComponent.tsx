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
  let classes = "block m-3 text-center";
  if (is_muted) {
    classes += " bg-gradient-to-tl from-white via-gray-100 to-white bg-repeat-x	";
    return <Card className={classes}><Text type="secondary">{label}</Text></Card>
  } else {
    return <Card className={classes}><Text>{label}</Text></Card>;
  }
}
