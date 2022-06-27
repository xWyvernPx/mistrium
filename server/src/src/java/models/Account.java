package models;
//import com.google.gson.annotations.
import java.util.Date;

public class Account extends Timestamp {
    private int id;
    private String password;
    private String email;
    private boolean role;
    private AccountDetail account_detail;
    private AccountCharge account_charge;

    public Account(int id, String password, String email, boolean role, boolean active, Date created_at, Date modified_at, Date deleted_at, int modified_by) {
        super(active, created_at, modified_at, deleted_at, modified_by);
        this.id = id;
        this.password = password;
        this.email = email;
        this.role = role;
    }

    public Account(int id, String password, String email, boolean role) {
        this.id = id;
        this.password = password;
        this.email = email;
        this.role = role;
    }

    public Account() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isRole() {
        return role;
    }

    public void setRole(boolean role) {
        this.role = role;
    }

    public AccountDetail getAccount_detail() {
        return account_detail;
    }

    public void setAccount_detail(AccountDetail account_detail) {
        this.account_detail = account_detail;
    }

    public AccountCharge getAccount_charge() {
        return account_charge;
    }

    public void setAccount_charge(AccountCharge account_charge) {
        this.account_charge = account_charge;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public Date getModified_at() {
        return modified_at;
    }

    public void setModified_at(Date modified_at) {
        this.modified_at = modified_at;
    }

    public Date getDeleted_at() {
        return deleted_at;
    }

    public void setDeleted_at(Date deleted_at) {
        this.deleted_at = deleted_at;
    }

    public int getModified_by() {
        return modified_by;
    }

    public void setModified_by(int modified_by) {
        this.modified_by = modified_by;
    }

    @Override
    public String toString() {
        return "Account{" + "id=" + id + ", password=" + password + ", email=" + email + ", role=" + role + ", account_detail=" + account_detail + ", account_charge=" + account_charge + '}';
    }
   
    
}