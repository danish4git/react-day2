import "./App.css";

function App() {
  const opsys = ["Android", "Blackberry", "Iphone", "Windows phone"];
  const manuf = ["samsung", "HTC", "Micromax", "Apple"];

  return (
    <div>
      <h1 className="head">REACT MOBILE OS</h1>

      <ul>
        Mobile operating system
        {opsys.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
      <br />
      <ul>
        Mobile Manufacturer
        {manuf.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
  );
  // const data = [
  //   { name: "danish", age: "24" },
  //   { name: "monu", age: "22" },
  //   { name: "roshan", age: "24" },
  //   { name: "prachi", age: "20" },
  // ];
  // return (
  //   <div>
  //     {data.map((user) => {
  //       return <UserComp name={user.name} age={user.age} />;
  //     })}
  //   </div>
  // );
}

// function UserComp({ name, age }) {
//   return (
//     <div>
//       <h1>my name is {name}</h1>
//       <p>my age is {age}</p>
//     </div>
//   );
// }

export default App;
