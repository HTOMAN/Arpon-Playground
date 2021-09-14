/**
 * A type that can be compared for value equality.
 */
export default interface Equatable<T> {
  equalTo(instance: T): boolean;
  contains?: (instance: T) => boolean;
}
