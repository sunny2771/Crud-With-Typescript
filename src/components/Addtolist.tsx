import * as React from "react";

interface IAddtolistProps {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];

  setPeople: React.Dispatch<React.SetStateAction<IAddtolistProps["people"]>>;
}

const Addtolist: React.FC<IAddtolistProps> = ({ people, setPeople }) => {
  const [input, setInput] = React.useState({
    name: "",
    age: "",
    imgUrl: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        img: input.imgUrl,
        note: input.note,
      },
    ]);
  };

  return (
    <div className="addToList">
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={input.name}
        className="inputBox"
      />
      <input
        type="number"
        name="age"
        placeholder="age"
        onChange={handleChange}
        value={input.age}
        className="inputBox"
      />
      <input
        type="text"
        name="imgUrl"
        placeholder="ImgUrl"
        onChange={handleChange}
        value={input.imgUrl}
        className="inputBox"
      />
      <textarea
        name="note"
        placeholder="Notes"
        onChange={handleChange}
        value={input.note}
        className="inputBox"
      />
      <button onClick={handleClick} className="AddToListBtn">
        Add to List
      </button>
    </div>
  );
};

export default Addtolist;
