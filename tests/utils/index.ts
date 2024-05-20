import { DataSource } from 'typeorm';

export const truncateTables = async (connection: DataSource) => {
    //is line ka kaam h yeh hume entities ki list provide krega
    // hamare case me aek hi h abhi user
    const entities = connection.entityMetadatas;

    for (const entity of entities) {
        //it will get the individual repository
        const repository = connection.getRepository(entity.name);
        await repository.clear();
    }
};
