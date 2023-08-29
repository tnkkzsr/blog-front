//時間表記の変更
export const  formatDate = (updated_at:string):string =>{
    
    const nowDate = new Date();
    const updatedDate = new Date(updated_at);
    const diff = nowDate.getTime() - updatedDate.getTime();
    
    const diffMin = Math.floor(diff / 60000);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    
    if(diffMin <60) return `${diffMin}分前`;
    else if(diffHour < 24) return `${diffHour}時間前`;
    else if(diffDay < 7) return `${diffDay}日前`;
    else return updatedDate.toLocaleDateString('ja-JP');

}