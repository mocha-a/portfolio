import { useEffect, useRef, useState } from "react";
import PopupItem from "./popup/PopupItem";
import TagBtn from "./popup/TagButton";
import SolidLine from "../SolidLine";

function ProjectItem({ data }) {
  const [item, setItem] = useState(null);
  const popupRef = useRef(null);

  function click(clickedItem) {
    if (item === clickedItem) {
      setItem(null);
    } else {
      setItem(clickedItem);
    }
  }

  // 바깥 클릭 시 팝업 닫기
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setItem(null);
      }
    }

    if (item) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [item]);

  // 팝업이 열릴 때 body scroll 막기
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [item]);

  return (
    <div className="project_absolute">
      <div className="project_item">
        {data.map((item, index) => (
          <div
            key={index}
            className="data_box"          
            onClick={() => click(item)}
          >
            <p className="data_thumbnail">
              <img src={item.thumbnail} alt="" />
            </p>
            <div className="data_content">
              <h3 className="data_title">{item.title}</h3>
              <p className="data_subtitle">{item.subtitle}</p>
              <SolidLine color={ '#ddd' }/>
              {(item.stack.frontEnd.length > 0 || item.stack.backEnd.length > 0) && (
              <div className="data_stack">
                {[...item.stack.frontEnd, ...item.stack.backEnd].map((tech, i) => (
                  <TagBtn key={i} tagbtn={tech} color={item.color} className='data_tagbtn' />
                ))}
              </div>
            )}
            </div>
          </div>
        ))}
      </div>
      
      {/* 팝업 오버레이 */}
      {item && <div className="overlay" />}

      {/* 팝업 본문 */}
      {item && (
        <div ref={popupRef}>
          <PopupItem data={item} onClose={() => setItem(null)}/>
        </div>
      )}
    </div>
  );
}

export default ProjectItem;
