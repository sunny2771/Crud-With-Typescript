import React, { useEffect, useRef, useState } from "react";

interface Iprops {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
  setPeople: React.Dispatch<React.SetStateAction<Iprops["people"]>>;
}

const List: React.FC<Iprops> = ({ people, setPeople }) => {
  const [input, setinput] = useState<boolean>(false);
  const [newInput, setNewInput] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [input]);

  const handleDelete = (named: string) => {
    setPeople(
      people.filter((item) => {
        return item?.name !== named;
      })
    );
  };

  const handleEdit = (named: string) => {
    setinput(!input);
    if (newInput) {
      setPeople(
        people.map((item) =>
          item.name === named ? { ...item, name: newInput } : item
        )
      );
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewInput(e.target.value);
  };

  console.log("newInput", newInput);

  const renderList = (): JSX.Element[] => {
    return people.map((item) => {
      return (
        <li className="List" key={item.name}>
          <div className="List-header">
            <img className="List-img" src={item.img} />

            {input ? (
              <input
                type="text"
                ref={inputRef}
                className="inputBoxEdit"
                defaultValue={item?.name}
                onChange={handleInput}
              />
            ) : (
              <h3>{item.name}</h3>
            )}
          </div>
          <p>{item.age} years old</p>
          <p className="List-note">{item.note}</p>
          <br />

          <button className="delete" onClick={() => handleDelete(item.name)}>
            Delete
          </button>

          <button className="edit" onClick={() => handleEdit(item?.name)}>
            Edit
          </button>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
