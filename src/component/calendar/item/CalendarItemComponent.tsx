import React from "react";
import { Card, Typography } from "antd";
const { Text } = Typography;

type CalendarItemComponentProps = {
  label: String;
  is_muted?: boolean;
};

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
