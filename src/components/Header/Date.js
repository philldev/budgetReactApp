import React, {  } from "react";
import { Heading } from "@chakra-ui/core";

export default function DisplayDate() {

  const date = () => {
    let date, month;

  date = new Date();

  // year = date.getFullYear();

  month = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return month[date.getMonth()]

  }

  return (
    <Heading as="h2" size="md">
      Available budget in {date()}
    </Heading>
  );
}
