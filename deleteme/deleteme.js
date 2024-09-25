var list = [];
const func1 = () => {
  console.log(list);
};
const func2 = () => {
  list = ["hello"];
};

func1();
func2();
