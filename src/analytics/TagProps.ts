export default interface TagProps {
  tag: string;
  position?: {
    id: string;
    row?: number;
    column?: number;
  };
}
