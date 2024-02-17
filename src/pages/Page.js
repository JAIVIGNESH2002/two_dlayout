import TableGroup from "../components/TableGroup";
import "./Page.css";
import React from "react";

function SeatUpComponent(props) {
  const [selected, setSelected] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const imgSrc_select = './armchair-5-1@2x.png';
  const imgSrc_hover = './armchair-3-1@2x.png';
  const imgsrc = selected ? imgSrc_select : (hover ? imgSrc_hover : './seat-53@2x.png');
  var exKey = null;
  if(props.seat_id){
    console.log("Key value "+props.seat_id);
    exKey=props.seat_id;
  }
  return (
    <img className={props.cname} src={imgsrc} onClick={() => {setSelected(!selected);
    console.log("Value of key from on click "+exKey)}} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} />
  );
}

function SeatDownComponent(props) {
  const [selected, setSelected] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const imgSrc_select = './armchair-5-1@2x.png';
  const imgSrc_hover = './armchair-3-1@2x.png';
  const imgsrc = selected ? imgSrc_select : (hover ? imgSrc_hover : './seat-53@2x.png');
  return (
    <img className={props.cname} src={imgsrc} onClick={() => setSelected(!selected)} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} style={{ rotate: "180deg" }} />
  );
}

function SeatLeftComponent(props) {
  const [selected, setSelected] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const imgSrc_select = './armchair-5-1@2x.png';
  const imgSrc_hover = './armchair-3-1@2x.png';
  const imgsrc = selected ? imgSrc_select : (hover ? imgSrc_hover : './seat-53@2x.png');
  return (
    <img className={props.cname} src={imgsrc} onClick={() => setSelected(!selected)} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} style={{ rotate: "270deg" }} />
  );
}

function SeatRightComponent(props) {
  const [selected, setSelected] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const imgSrc_select = './armchair-5-1@2x.png';
  const imgSrc_hover = './armchair-3-1@2x.png';
  const imgsrc = selected ? imgSrc_select : (hover ? imgSrc_hover : './seat-53@2x.png');
  return (
    <img className={props.cname} src={imgsrc} onClick={() => setSelected(!selected)} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} style={{ rotate: "90deg" }} />
  );
}
const Page = () => {
  return (
    <div className="page">
      <TableGroup />

      <SeatLeftComponent cname="seat-icon"/>
      <SeatLeftComponent cname="seat-icon1" />
      <SeatLeftComponent cname="seat-icon2" />

      <SeatRightComponent cname="seat-icon3" />
      <SeatRightComponent cname="seat-icon4" />
      <div className="table-group">
        <div className="table-158" />
        <div className="table-157" />
        <div className="table-156" />
        <div className="table-155" />
        <div className="table-154" />
      </div>

      <SeatLeftComponent cname="seat-icon5" />
      <SeatLeftComponent cname="seat-icon6" />

      <SeatRightComponent cname="seat-icon7" />
      <SeatRightComponent cname="seat-icon8" />
      <SeatRightComponent cname="seat-icon9" />
      <div className="table-group1">
        <div className="table-153" />
        <div className="table-152" />
        <div className="table-151" />
        <div className="table-150" />
        <div className="table-149" />
      </div>

      <SeatLeftComponent cname="seat-icon10" />
      <SeatLeftComponent cname="seat-icon11" />
      <SeatLeftComponent cname="seat-icon12" />
      <SeatLeftComponent cname="seat-icon13" />

      <SeatRightComponent cname="seat-icon14" />
      <SeatRightComponent cname="seat-icon15" />
      <SeatRightComponent cname="seat-icon16" />
      <SeatRightComponent cname="seat-icon17" />
      <div className="table-group2">
        <div className="table-129" />
        <div className="table-128" />
        <div className="table-127" />
        <div className="table-126" />
        <div className="table-125" />
        <div className="table-124" />
        <div className="table-123" />
        <div className="table-122" />
      </div>

      <SeatLeftComponent cname="seat-icon18" />
      <SeatLeftComponent cname="seat-icon19" />
      <SeatLeftComponent cname="seat-icon20" />
      <SeatLeftComponent cname="seat-icon21" />

      <SeatRightComponent cname="seat-icon22" />
      <SeatRightComponent cname="seat-icon23" />
      <SeatRightComponent cname="seat-icon24" />
      <SeatRightComponent cname="seat-icon25" />
      <div className="table-group3">
        <div className="table-121" />
        <div className="table-120" />
        <div className="table-119" />
        <div className="table-118" />
        <div className="table-117" />
        <div className="table-116" />
        <div className="table-115" />
        <div className="table-114" />
      </div>

      <SeatLeftComponent cname="seat-icon26" />
      <SeatLeftComponent cname="seat-icon27" />
      <SeatLeftComponent cname="seat-icon28" />
      <SeatLeftComponent cname="seat-icon29" />

      <SeatRightComponent cname="seat-icon30" />
      <SeatRightComponent cname="seat-icon31" />
      <SeatRightComponent cname="seat-icon32" />
      <SeatRightComponent cname="seat-icon33" />
      <div className="table-group4">
        <div className="table-113" />
        <div className="table-112" />
        <div className="table-111" />
        <div className="table-110" />
        <div className="table-109" />
        <div className="table-108" />
        <div className="table-107" />
        <div className="table-106" />
      </div>

      <SeatLeftComponent cname="seat-icon34" />
      <SeatLeftComponent cname="seat-icon35" />
      <SeatLeftComponent cname="seat-icon36" />
      <SeatLeftComponent cname="seat-icon37" />
      <div className="table-group5">
        <div className="table-105" />
        <div className="table-104" />
        <div className="table-103" />
        <div className="table-102" />
      </div>

      <SeatRightComponent cname="seat-icon38" />
      <SeatRightComponent cname="seat-icon39" />
      <SeatRightComponent cname="seat-icon40" />
      <div className="table-group6">
        <div className="table-101" />
        <div className="table-100" />
        <div className="table-99" />
      </div>

      <SeatLeftComponent cname="seat-icon41" />
      <SeatLeftComponent cname="seat-icon42" />
      <SeatLeftComponent cname="seat-icon43" />

      <SeatRightComponent cname="seat-icon44" />
      <SeatRightComponent cname="seat-icon45" />
      <SeatRightComponent cname="seat-icon46" />
      <div className="table-group7">
        <div className="table-92" />
        <div className="table-91" />
        <div className="table-90" />
        <div className="table-89" />
        <div className="table-88" />
        <div className="table-87" />
      </div>

      <SeatLeftComponent cname="seat-icon47" />
      <SeatLeftComponent cname="seat-icon48" />
      <SeatLeftComponent cname="seat-icon49" />

      <SeatRightComponent cname="seat-icon50" />
      <SeatRightComponent cname="seat-icon51" />
      <SeatRightComponent cname="seat-icon52" />
      <div className="table-group8">
        <div className="table-921" />
        <div className="table-911" />
        <div className="table-901" />
        <div className="table-891" />
        <div className="table-881" />
        <div className="table-871" />
      </div>
      <SeatUpComponent cname="seat-icon53"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon54"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon55"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon56"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon57"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon58"></SeatUpComponent>
      <SeatDownComponent cname="seat-icon59" />
      <SeatDownComponent cname="seat-icon60" />
      <SeatDownComponent cname="seat-icon61" />
      <SeatDownComponent cname="seat-icon62" />
      <SeatDownComponent cname="seat-icon63" />
      <SeatDownComponent cname="seat-icon64" />
      <div className="table-group9">
        <div className="table-73" />
        <div className="table-72" />
        <div className="table-71" />
        <div className="table-70" />
        <div className="table-69" />
        <div className="table-68" />
        <div className="table-67" />
        <div className="table-66" />
        <div className="table-65" />
        <div className="table-64" />
        <div className="table-63" />
        <div className="table-62" />
      </div>
      <SeatUpComponent cname="seat-icon65"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon66"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon67"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon68"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon69"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon70"></SeatUpComponent>
      <SeatDownComponent cname="seat-icon71" />
      <SeatDownComponent cname="seat-icon72" />
      <SeatDownComponent cname="seat-icon73" />
      <SeatDownComponent cname="seat-icon74" />
      <SeatDownComponent cname="seat-icon75" />
      <SeatDownComponent cname="seat-icon76" />
      <div className="table-group10">
        <div className="table-61" />
        <div className="table-60" />
        <div className="table-59" />
        <div className="table-58" />
        <div className="table-57" />
        <div className="table-56" />
        <div className="table-55" />
        <div className="table-54" />
        <div className="table-53" />
        <div className="table-52" />
        <div className="table-51" />
        <div className="table-50" />
      </div>
      <SeatUpComponent cname="seat-icon78" />
      <SeatUpComponent cname="seat-icon79" />
      <SeatUpComponent cname="seat-icon80" />
      <SeatUpComponent cname="seat-icon77" />
      <SeatUpComponent cname="seat-icon81" />
      <SeatUpComponent cname="seat-icon82" />

      <SeatDownComponent cname="seat-icon83" />
      <SeatDownComponent cname="seat-icon84" />
      <SeatDownComponent cname="seat-icon85" />
      <SeatDownComponent cname="seat-icon86" />
      <SeatDownComponent cname="seat-icon87" />
      <SeatDownComponent cname="seat-icon88" />
      <div className="table-group11">
        <div className="table-49" />
        <div className="table-48" />
        <div className="table-47" />
        <div className="table-46" />
        <div className="table-45" />
        <div className="table-44" />
        <div className="table-43" />
        <div className="table-42" />
        <div className="table-41" />
        <div className="table-40" />
        <div className="table-39" />
        <div className="table-38" />
      </div>

      <SeatUpComponent cname="seat-icon89"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon90"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon91"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon92"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon93"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon94"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon95"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon96"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon97"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon98" seat_id="WKS-001"></SeatUpComponent>

      <div className="n-o-c-room-marker">
        <div className="table-6" />
        <div className="table-5" />
        <div className="table-4" />
        <div className="table-3" />
        <div className="table-2" />
        <div className="table-1" />
      </div>
      <input className="noc-room-rect" type="text" />
      <div className="noc-room">NOC ROOM</div>

      <SeatDownComponent cname="seat-20-icon" />
      <SeatDownComponent cname="seat-19-icon" />
      <SeatDownComponent cname="seat-18-icon" />
      <SeatDownComponent cname="seat-17-icon" />

      <div className="table-group12">
        <div className="table-26" />
        <div className="table-25" />
        <div className="table-24" />
        <div className="table-23" />
        <div className="table-22" />
        <div className="table-21" />
        <div className="table-20" />
        <div className="table-19" />
        <div className="table-18" />
        <div className="table-17" />
      </div>

      <SeatDownComponent cname="seat-12-icon" />
      <SeatDownComponent cname="seat-11-icon" />
      <SeatDownComponent cname="seat-10-icon" />
      <SeatDownComponent cname="seat-9-icon" />
      <SeatDownComponent cname="seat-8-icon" />
      <SeatDownComponent cname="seat-7-icon" />
      <div className="table-group13">
        <div className="table-16" />
        <div className="table-15" />
        <div className="table-14" />
        <div className="table-13" />
        <div className="table-12" />
        <div className="table-11" />
        <div className="table-10" />
        <div className="table-9" />
        <div className="table-8" />
        <div className="table-7" />
      </div>

      <SeatUpComponent cname="table-group-icon"></SeatUpComponent>
      <SeatUpComponent cname="table-group-icon1"></SeatUpComponent>
      <SeatUpComponent cname="table-group-icon2"></SeatUpComponent>
      <SeatUpComponent cname="table-group-icon3"></SeatUpComponent>
      <SeatUpComponent cname="table-group-icon4"></SeatUpComponent>

      <SeatDownComponent cname="seat-icon99" />
      <SeatDownComponent cname="seat-icon100" />
      <SeatDownComponent cname="seat-icon101" />
      <SeatDownComponent cname="seat-icon102" />
      <SeatDownComponent cname="seat-icon103" />
      <SeatDownComponent cname="seat-icon104" />

      <div className="table-group14">
        <div className="table-37" />
        <div className="table-36" />
        <div className="table-35" />
        <div className="table-34" />
        <div className="table-33" />
        <div className="table-32" />
        <div className="table-31" />
        <div className="table-30" />
        <div className="table-29" />
        <div className="table-28" />
        <div className="table-27" />
      </div>

      <SeatLeftComponent cname="seat-icon105" />
      <SeatLeftComponent cname="seat-icon106" />
      <div className="table-group15">
        <div className="rectangle-pair" />
        <div className="rectangle-pair1" />
      </div>

      <SeatUpComponent cname="seat-icon107"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon108"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon109"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon110"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon111"></SeatUpComponent>
      <SeatUpComponent cname="seat-icon112"></SeatUpComponent>

      <SeatDownComponent cname="seat-icon113" />
      <SeatDownComponent cname="seat-icon114" />
      <SeatDownComponent cname="seat-icon115" />
      <SeatDownComponent cname="seat-icon116" />
      <SeatDownComponent cname="seat-icon117" />
      <div className="table-group16">
        <div className="table-84" />
        <div className="table-83" />
        <div className="table-82" />
        <div className="table-81" />
        <div className="table-80" />
        <div className="table-79" />
        <div className="table-78" />
        <div className="table-77" />
        <div className="table-76" />
        <div className="table-75" />
        <div className="table-74" />
      </div>

      <SeatLeftComponent cname="seat-icon118" />
      <SeatLeftComponent cname="seat-icon119" />
      <SeatLeftComponent cname="seat-icon120" />
      <SeatLeftComponent cname="seat-icon121" />

      <SeatRightComponent cname="seat-icon122" />
      <SeatRightComponent cname="seat-icon123" />
      <SeatRightComponent cname="seat-icon124" />
      <SeatRightComponent cname="seat-icon125" />
      <div className="table-group17">
        <div className="table-137" />
        <div className="table-136" />
        <div className="table-135" />
        <div className="table-134" />
        <div className="table-133" />
        <div className="table-132" />
        <div className="table-131" />
        <div className="table-130" />
      </div>

      <SeatLeftComponent cname="seat-icon126" />
      <SeatLeftComponent cname="seat-icon127" />
      <SeatLeftComponent cname="seat-icon128" />

      <SeatRightComponent cname="seat-icon129" />
      <SeatRightComponent cname="seat-icon130" />
      <SeatRightComponent cname="seat-icon131" />
      <div className="table-group18">
        <div className="table-148" />
        <div className="table-147" />
        <div className="table-146" />
        <div className="table-145" />
        <div className="table-144" />
        <div className="table-143" />
      </div>

      <SeatLeftComponent cname="seat-icon132" />
      <SeatLeftComponent cname="seat-icon133" />
      <SeatLeftComponent cname="seat-icon134" />

      <SeatRightComponent cname="seat-icon135" />
      <SeatRightComponent cname="seat-icon136" />
      <div className="inner-tables">
        <div className="table-142" />
        <div className="table-141" />
        <div className="table-140" />
        <div className="table-139" />
        <div className="table-138" />
      </div>
    </div>
  );
};

export default Page;
