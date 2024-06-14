export async function updateProjectService() {  
    try {
        return 'updateProjectService';
    } catch (error) {
        console.log(`server error on route get url/ :: ${error}`);
        return "internal server error";
    }
}