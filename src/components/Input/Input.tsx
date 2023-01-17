import "./Input.css";

type InputProps = {
  result: string;
};

const Input = ({ result }: InputProps) => {
  return (
    <>
      <form>
        <input type="text" value={result} />
      </form>
    </>
  );
};

export default Input;
