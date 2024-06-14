export async function removeProjectService() {
    try {
        return 'removeProjectService';
    } catch (error) {
        console.log(`server error on route get url/ :: ${error}`);
        return "internal server error";
    }
}