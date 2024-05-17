const svgMaker = (name: string, classname?: string) => {
  return (
    <svg className={classname}>
      <use href={`/images/sprite.svg#${name}`}></use>
    </svg>
  );
};

export default svgMaker;
