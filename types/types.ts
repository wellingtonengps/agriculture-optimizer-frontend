export type solutionProps = {
  id: number;
  solutionCrops: solutionCropProps[];
  inputData: inputDataProps;
  fields: fieldProps[];
};

export type inputDataProps = {
  id: number | null;
  budget: number;
  space: number;
  selectedCrops: cropProps[];
  fields: fieldProps[];
  timeFrames: number | null;
};

export type fieldProps = {
  id: number | null;
  name: string;
  size: number;
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
  isActive: boolean;
};

export type solutionCropProps = {
  id: number;
  amount: number;
  crop: cropProps;
  timeFrame: number;
  field: fieldProps;
};
