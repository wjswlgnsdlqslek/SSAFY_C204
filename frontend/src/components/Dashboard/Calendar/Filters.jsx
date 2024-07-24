import { importantOptions, typeOptions } from "./dataset";

function Filters({ filter, setFilter }) {
  const imOptions = [{ label: "ALL", value: "ALL" }, ...importantOptions];
  const tyOptions = [{ label: "ALL", value: "ALL" }, ...typeOptions];

  const typeChangeHandle = (evt) => {
    if (evt.target.value === filter?.type) return;
    setFilter((state) => ({
      ...state,
      type: evt.target.value,
    }));
  };
  const importantChangeHandle = (evt) => {
    if (evt.target.value === filter?.important) return;
    setFilter((state) => ({
      ...state,
      important: evt.target.value,
    }));
  };

  return (
    <>
      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Click me to show/hide content
        </div>
        <div className="collapse-content">
          {/* collapse 시작 */}
          <div className="flex flex-col">
            <div>
              {tyOptions.map((opt) => (
                <div key={opt.value} className="form-control ">
                  <label className="label cursor-pointer">
                    <span className="label-text">{opt.label}</span>
                    <input
                      type="checkbox"
                      value={opt.value}
                      className={`toggle checked:${opt.color}`}
                      checked={filter?.type === opt.value}
                      onChange={typeChangeHandle}
                    />
                  </label>
                </div>
              ))}
            </div>
            <div>
              {imOptions.map((opt) => (
                <div key={opt.value} className="form-control ">
                  <label className="label cursor-pointer">
                    <span className="label-text">{opt.label}</span>
                    <input
                      type="checkbox"
                      value={opt.value}
                      className={`toggle checked:${opt.color}`}
                      checked={filter?.important === opt.value}
                      onChange={importantChangeHandle}
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* collapse 끝 */}
        </div>
      </div>
    </>
  );
}

export default Filters;
