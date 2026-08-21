resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.location
}

resource "random_string" "unique_suffix" {
  length  = 8
  special = false
  upper   = false
}

resource "azurerm_storage_account" "sa" {
  name                     = "${var.storage_account_prefix}${random_string.unique_suffix.result}"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = var.storage_account_tier
  account_replication_type = var.storage_account_replication_type

  tags = {
    environment = "development"
    managed_by  = "terraform"
  }
}
