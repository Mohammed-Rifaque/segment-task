import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSegmentData } from "../api";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";
import { segmentSelector } from "../redux/slicers/segmentSlice";

const SegmentTable = () => {
  const dispatch = useDispatch();
  const { segment = [] } = useSelector(segmentSelector);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getSegmentData(setLoading));
  }, [dispatch]);

  if (loading) {
    return <CircularProgress />;
  }

  const getData = (data, name) => {
    if (data?.length > 0) {
      for (const obj of data) {
        if (name in obj) {
          return obj[name];
        } else {
          return "NA";
        }
      }
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Segment Name</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Account</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {segment.length > 0 ? (
            segment.map((row, rowIndex) => {
              const data = row && row?.content && JSON.parse(row?.content);
              return (
                <TableRow key={rowIndex}>
                  <TableCell>{data.segment_name || "NA"}</TableCell>
                  <TableCell>
                    {getData(data?.schema, "first_name") || "NA"}
                  </TableCell>
                  <TableCell>
                    {getData(data?.schema, "last_name") || "NA"}
                  </TableCell>
                  <TableCell>
                    {getData(data?.schema, "gender") || "NA"}
                  </TableCell>
                  <TableCell>
                    {getData(data?.schema, "age") || "NA"}
                  </TableCell>
                  <TableCell>
                    {getData(data?.schema, "account_name") || "NA"}
                  </TableCell>
                  <TableCell>
                    {getData(data?.schema, "city") || "NA"}
                  </TableCell>
                  <TableCell>
                    {getData(data?.schema, "state") || "NA"}
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={7}>
                <span>No data</span>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SegmentTable;
