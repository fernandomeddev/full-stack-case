export interface IResult<T> {
    success: boolean;
    data?: T;
    messages?: string[]
}