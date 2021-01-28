import ImageBoard from "./ImageBoard";
import NavBar from "./NavBar";

const cardArray = [
  {
    id: 1,
    tittle: "DIY-Tips Tricks Ideas Repair",
    image:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    text: "Aviation Explorer",
  },
  {
    id: 2,
    tittle: "AVIATION",
    image:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text: "Aviation Explorer",
  },
  {
    id: 3,
    tittle: "Exceptional Aviation",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text: "Aviation Explorer",
  },
  {
    id: 4,
    tittle: "AEROSPACE",
    image:
      "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text: "Aviation Explorer",
  },
  {
    id: 5,
    tittle: "FLYING IS A FORTUNE",
    image:
      "https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHRyYXZlbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text: "Aviation Explorer",
  },
  {
    id: 6,
    tittle: "Recycled AIRCRAFT",
    image:
      "https://images.unsplash.com/photo-1484804959297-65e7c19d7c9f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
    text: "Aviation Explorer",
  },
];
const Pintrest = () => {
  return (
    <div className="pintrest">
      <NavBar /> <ImageBoard cards={cardArray} />
    </div>
  );
};

export default Pintrest;
