import { useState, useEffect } from "react";
import TableWrapper from "./TableWrapper";
import logo from "../assets/logo.png";
import heading from "../assets/heading.png";

const FridayTable = () => {
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
          <thead>
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
                09:00-09:50
              </td>
              <td
                className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                rowSpan={2}
                colSpan={3}
              >
                9:50 - 10:40
              </td>
              <td
                className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                rowSpan={2}
                colSpan={3}
              >
                10:50 - 11:40
              </td>
              <td
                className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                rowSpan={2}
                colSpan={3}
              >
                11:40 - 12:30
              </td>

              <td className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"></td>
              {/* After Break */}
              <td
                className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                rowSpan={2}
                colSpan={3}
              >
                2:10 - 3:00
              </td>
              <td
                className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                rowSpan={2}
                colSpan={3}
              >
                3:00 - 3:50
              </td>
              <td
                className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                rowSpan={2}
                colSpan={3}
              >
                3:50 -4:40
              </td>
              <td
                className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                rowSpan={2}
                colSpan={3}
              >
                4:50 - 5:40
              </td>
              <td
                className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                rowSpan={2}
                colSpan={3}
              >
                5:40 - 6:30
              </td>
              <td
                className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                rowSpan={2}
                colSpan={3}
              >
                6:50 - 7:40
              </td>
              <td
                className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                rowSpan={2}
                colSpan={3}
              >
                7:40 - 8:30
              </td>
            </tr>
          </thead>

          {/* table body start here  */}
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
                09:00-09:50
              </td>
              <td
                className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                rowSpan={2}
                colSpan={3}
              >
                9:50 - 10:40
              </td>
              <td
                className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                rowSpan={2}
                colSpan={3}
              >
                10:50 - 11:40
              </td>
              <td
                className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                rowSpan={2}
                colSpan={3}
              >
                11:40 - 12:30
              </td>

              <td className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"></td>
              {/* After Break */}
              <td
                className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                rowSpan={2}
                colSpan={3}
              >
                2:10 - 3:00
              </td>
              <td
                className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                rowSpan={2}
                colSpan={3}
              >
                3:00 - 3:50
              </td>
              <td
                className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                rowSpan={2}
                colSpan={3}
              >
                3:50 -4:40
              </td>
              <td
                className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                rowSpan={2}
                colSpan={3}
              >
                4:50 - 5:40
              </td>
              <td
                className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                rowSpan={2}
                colSpan={3}
              >
                5:40 - 6:30
              </td>
              <td
                className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                rowSpan={2}
                colSpan={3}
              >
                6:50 - 7:40
              </td>
              <td
                className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
                rowSpan={2}
                colSpan={3}
              >
                7:40 - 8:30
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FridayTable;
