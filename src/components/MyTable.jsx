import { useState, useEffect } from "react";
import TableWrapper from "./TableWrapper";
import logo from "../assets/logo.png";
import heading from "../assets/heading.png";

const ResponsiveTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://routine-management-system-backend.onrender.com/api/v1/routine?day=Saturday&shift=Regular"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div>
        <img className="mx-auto" src={heading} alt="" />
      </div>

      {/* Watermark overlay */}
      <div className="relative mt-[25px]">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url('${logo}')`, // Set watermark image URL
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.15, // Adjust opacity as required
          }}
        />
        <TableWrapper>
          <table
            border={1}
            className="table-auto font-bold text-center border-2 border-[#000] table-ui w-full text-white"
            cellPadding="0"
            cellSpacing={0}
            style={{
              position: "relative", // Ensure table remains on top of watermark
              zIndex: 1, // Set higher z-index to keep table above watermark
            }}
          >
            <tbody>
              <tr>
                <td
                  className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-black p-[16px] text-center whitespace-nowrap"
                  rowSpan={2}
                  colSpan={3}
                >
                  Batch
                </td>
                <td
                  className="text-[14px] border-[#000]  border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center"
                  rowSpan={2}
                  colSpan={3}
                >
                  Year/ Sem
                </td>
                <td
                  className="text-[14px] border-[#000]  border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center"
                  rowSpan={2}
                  colSpan={2}
                >
                  Sem No
                </td>
                <td
                  className="text-[14px]  border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center"
                  rowSpan={2}
                  colSpan={2}
                >
                  Room Number
                </td>
                <td
                  className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                  rowSpan={2}
                  colSpan={3}
                >
                  09.00-10.20AM
                </td>
                <td
                  className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                  rowSpan={2}
                  colSpan={3}
                >
                  10.30-11.50AM
                </td>

                <td
                  className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                  colSpan={2}
                >
                  12.00-02.00PM
                </td>
                <td className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"></td>
                <td
                  className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                  colSpan={2}
                >
                  02.00-04.00PM
                </td>
              </tr>
              <tr>
                <td className="text-[14px] border-[#000] border-2 relative !z-[-1] border-b-[1px] border-r-[1px] whitespace-nowrap text-[#000] p-[16px] text-center">
                  12.00-01.20PM
                </td>
                <td className="text-[14px] border-[#000] border-2 relative !z-[-1] border-b-[1px] border-r-[1px] whitespace-nowrap text-[#000] p-[16px] text-center"></td>
                <td className="text-[14px] border-[#000] border-2 border-r-[1px] text-[#000] p-[16px] text-center  border-b-0"></td>
                <td className="text-[14px] border-[#000] border-2 relative !z-[-1] border-b-[1px] border-r-[1px] whitespace-nowrap text-[#000] p-[16px] text-center">
                  02.00-03.20PM
                </td>
                <td className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center"></td>
              </tr>

              {/* table body start here  */}
              {!loading &&
                data?.data?.map((item, index) => {
                  const { _id, batch, courses, room, sem, yearSem } = item;

                  return (
                    <tr key={_id}>
                      <td
                        className={`px-[16px] border-r-[1px] bg-white py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                        colSpan={3}
                      >
                        {batch}th
                      </td>
                      <td
                        className={`px-[16px] border-r-[1px] bg-white py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                        colSpan={3}
                      >
                        {yearSem}
                      </td>
                      <td
                        className="px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]"
                        colSpan={2}
                      >
                        {sem}
                      </td>
                      <td
                        className="px-[
                          16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]"
                        colSpan={2}
                      >
                        {room}
                      </td>
                      <td
                        colSpan={3}
                        className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                      >
                        {courses?.["1"]?.courseCode && (
                          <>
                            {courses?.["1"]?.courseCode}{" "}
                            {courses?.["1"]?.courseTitle}{" "}
                          </>
                        )}
                      </td>
                      <td
                        colSpan={3}
                        className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                      >
                        {courses?.["2"]?.courseCode && (
                          <>
                            {courses?.["2"]?.courseCode}{" "}
                            {courses?.["2"]?.courseTitle}{" "}
                          </>
                        )}
                      </td>
                      <td
                        className={`px-[16px] border-r-[0px] py-[6px] text-[#000] border-[#000] border-2 text-[14px] ${
                          courses?.["3"]?.courseTitle?.includes("Sessional")
                            ? "border-r-0"
                            : ""
                        }`}
                      >
                        {courses?.["3"]?.courseCode && (
                          <>
                            {courses?.["3"]?.courseCode}{" "}
                            {courses?.["3"]?.courseTitle}{" "}
                          </>
                        )}
                      </td>
                      <td
                        className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px] ${
                          courses?.["3"]?.courseTitle?.includes("Sessional")
                            ? "border-l-0"
                            : ""
                        }`}
                      ></td>
                      <td className="px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 border-t-0 border-b-0 text-[20px]">
                        {" "}
                        {index === 4 ? "B" : ""} {index === 5 ? "R" : ""}{" "}
                        {index === 6 ? "E" : ""} {index === 7 ? "A" : ""}{" "}
                        {index === 8 ? "K" : ""}
                      </td>
                      <td
                        className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px] ${
                          courses?.["4"]?.courseTitle?.includes("Sessional")
                            ? "border-r-0"
                            : ""
                        }`}
                      >
                        {courses?.["4"]?.courseCode && (
                          <>
                            {courses?.["4"]?.courseCode}{" "}
                            {courses?.["4"]?.courseTitle}{" "}
                          </>
                        )}
                      </td>
                      <td
                        className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px] ${
                          courses?.["4"]?.courseTitle?.includes("Sessional")
                            ? "border-l-0"
                            : ""
                        }`}
                      ></td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </TableWrapper>
      </div>
    </div>
  );
};

export default ResponsiveTable;
