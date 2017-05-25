/**
 * Created by david on 5/24/17.
 */
import * as jsf from 'json-schema-faker';
/**
 * SchemaHelper gets random schemas with valid values.
 * @module SchemaHelper
 */
export module SchemaHelper {
    export async function fakeSchema(name: string): Promise<object> {
        const schema: { $ref: string } = {
            $ref: `models/${name}.json`
        };

        return  await jsf.resolve(schema);
    }
}
