import { NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { CirclePicker } from "react-color";
import useStore from "store/useStore";

interface Props {
  id: string;
}
function Join({ id }: Props) {
  const { setData } = useStore((state) => state);
  const router = useRouter();
  const [value, setValue] = useState({
    name: "",
    color: "03a9f4",
    shake: false,
    initial: true,
  });

  const handleColor = (selectedColor: any) =>
    setValue({ ...value, color: selectedColor.hex.slice(1) });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = () => {
    if (!value.name) setValue({ ...value, shake: true });
    else {
      setData(
        value.name,
        `https://ui-avatars.com/api/?background=${value.color}&color=fff&rounded=true&name=${value.name}`,
      );
      router.push(`/room/${id}`);
    }
  };

  const handleAnimationEnd = () => {
    setValue({ ...value, shake: false, initial: false });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Head>
        <title>ChatApp - Join {id}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`bg-base-300 p-6 flex flex-col items-center justify-between space-y-8 rounded-md animate__animated md:flex-row md:w-[600px] md:h-[300px] ${
          value.shake ? "animate__shakeX" : ""
        } ${value.initial ? "animate__bounceIn" : ""}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="flex flex-col w-full space-y-2 md:w-1/2">
          <h1 className="mb-2 font-bold text-center">
            You&apos;ve been invited to join the room, &quot;{id}&quot;.
          </h1>
          <input
            type="text"
            placeholder="Nickname"
            value={value.name}
            name="name"
            onChange={handleChange}
            className="w-full input"
          />
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={handleSubmit}
          >
            Join Room
          </button>
        </div>
        <div className="flex flex-col items-center w-full space-y-6 md:w-1/2">
          <div className="relative h-[64px] w-[64px]">
            <Image
              className="duration-300 ease-out"
              layout="fill"
              objectFit="cover"
              src={`https://ui-avatars.com/api/?background=${value.color}&color=fff&rounded=true&name=${value.name}`}
            />
          </div>
          <CirclePicker color={value.color} onChangeComplete={handleColor} />
        </div>
      </div>
    </div>
  );
}

export default Join;

Join.getInitialProps = async (appContext: NextPageContext): Promise<Props> => {
  return { id: appContext.query.id as string };
};
