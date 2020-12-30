export interface DatabaseInterface {
  connect(): Promise<void>;
  close(): Promise<void>;
}
