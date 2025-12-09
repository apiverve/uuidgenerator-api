declare module '@apiverve/uuidgenerator' {
  export interface uuidgeneratorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface uuidgeneratorResponse {
    status: string;
    error: string | null;
    data: UUIDGeneratorData;
    code?: number;
  }


  interface UUIDGeneratorData {
      uuids:   string[];
      count:   number;
      version: number;
      format:  string;
      variant: string;
  }

  export default class uuidgeneratorWrapper {
    constructor(options: uuidgeneratorOptions);

    execute(callback: (error: any, data: uuidgeneratorResponse | null) => void): Promise<uuidgeneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: uuidgeneratorResponse | null) => void): Promise<uuidgeneratorResponse>;
    execute(query?: Record<string, any>): Promise<uuidgeneratorResponse>;
  }
}
