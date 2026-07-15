declare module '@apiverve/uuidgenerator' {
  export interface uuidgeneratorOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface uuidgeneratorResponse {
    status: string;
    error: string | null;
    data: UUIDGeneratorData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface UUIDGeneratorData {
      uuids:   (null | string)[];
      count:   number | null;
      version: number | null;
      format:  null | string;
      variant: null | string;
  }

  export default class uuidgeneratorWrapper {
    constructor(options: uuidgeneratorOptions);

    execute(callback: (error: any, data: uuidgeneratorResponse | null) => void): Promise<uuidgeneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: uuidgeneratorResponse | null) => void): Promise<uuidgeneratorResponse>;
    execute(query?: Record<string, any>): Promise<uuidgeneratorResponse>;
  }
}
