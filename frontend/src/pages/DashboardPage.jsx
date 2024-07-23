import Explorer from "../components/Dashboard/Explorer";
import DashboardContent from "../components/Dashboard/DashboardContent";
import Calendar from "../components/Dashboard/Calendar";
import useDeviceStore from "../store/deviceStore";

function DashboardPage() {
  const isMobile = useDeviceStore((state) => state.isMobile);

  return (
    <div className="flex h-screen ">
      {/* Explorer 컴포넌트의 너비를 비례적으로 조정 */}
      <div
        className={`flex-none ${
          isMobile ? "w-[90px]" : "flex-[1]"
        } min-w-[90px]`}
      >
        <Explorer />
      </div>
      {!isMobile && (
        <div className="flex-grow w-1/3 min-h-[500px] min-w-[200px]">
          <DashboardContent />
        </div>
      )}
      <div
        className={`flex-grow ${isMobile ? "w-full" : "w-2/3"} min-h-[500px]`}
      >
        <Calendar />
      </div>
    </div>
  );
}

export default DashboardPage;
