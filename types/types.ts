export type solutionProps = {
  id: number;
  solutionCrops: solutionCropProps[];
  inputData: inputDataProps;
};

export type inputDataProps = {
  id: number | null;
  budget: number;
  space: number;
};

export type fieldProps = {
  name: string;
  area: string;
};

export type plantProps = {
  name: string;
  value: number;
  cost: number;
};

export type dataProps = {
  investiment: number | null;
  fields: fieldProps[];
  plants: plantProps[];
};

export type cropProps = {
  id: number;
  name: string;
  price: number;
  cost: number;
  space: number;
};

export type solutionCropProps = {
  id: number;
  amount: number;
  crop: cropProps;
};
